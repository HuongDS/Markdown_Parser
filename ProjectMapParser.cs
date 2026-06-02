using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using Markdown_Parser.dtos;

public class ProjectMapParser
{
    public static ProjectBusinessMap Parse(string filePath)
    {
        var resultMap = new ProjectBusinessMap();
        BusinessFeature currentFeature = null;

        string[] lines = File.ReadAllLines(filePath);

        foreach (string line in lines)
        {
            string cleanLine = Regex.Replace(line, @"[\*`_]", "").Trim();

            if (string.IsNullOrEmpty(cleanLine)) continue;

            if (cleanLine.StartsWith("###") || cleanLine.Contains("[FEATURE]") || cleanLine.StartsWith("FEATURE", StringComparison.OrdinalIgnoreCase))
            {
                if (currentFeature != null)
                {
                    resultMap.Features.Add(currentFeature);
                }

                int colonIndex = cleanLine.IndexOf(":");
                string featureName = "";

                if (colonIndex >= 0)
                {
                    featureName = cleanLine.Substring(colonIndex + 1).Trim();
                }
                else
                {
                    featureName = Regex.Replace(cleanLine, @"^#+\s*(\[FEATURE\])?\s*", "", RegexOptions.IgnoreCase).Trim();
                }

                currentFeature = new BusinessFeature
                {
                    Name = featureName
                };
                continue;
            }

            string content = Regex.Replace(cleanLine, @"^[-\+\*]\s*", "").Trim();

            if (currentFeature == null)
            {
                ParseTechStack(content, resultMap.TechStack);
            }

            else
            {
                ParseFeatureDetails(content, currentFeature);
            }
        }

        if (currentFeature != null)
        {
            resultMap.Features.Add(currentFeature);
        }

        return resultMap;
    }

    private static void ParseTechStack(string content, TechStack techStack)
    {
        var frameworkMatch = Regex.Match(content, @"Framework:\s*(.*)", RegexOptions.IgnoreCase);
        if (frameworkMatch.Success)
        {
            techStack.Framework = frameworkMatch.Groups[1].Value.Trim();
            return;
        }

        var libMatch = Regex.Match(content, @"Third-party Libraries:\s*(.*)", RegexOptions.IgnoreCase);
        if (libMatch.Success)
        {
            string libsRaw = libMatch.Groups[1].Value.Trim();
            string[] libs = Regex.Split(libsRaw, @",|;|và", RegexOptions.IgnoreCase);

            foreach (var lib in libs)
            {
                string cleanLib = lib.Trim();
                if (!string.IsNullOrEmpty(cleanLib) && !techStack.ThirdPartyLibraries.Contains(cleanLib))
                {
                    techStack.ThirdPartyLibraries.Add(cleanLib);
                }
            }
        }
    }

    private static void ParseFeatureDetails(string content, BusinessFeature feature)
    {
        var descMatch = Regex.Match(content, @"Business Logic:\s*(.*)", RegexOptions.IgnoreCase);
        if (descMatch.Success)
        {
            feature.Description = descMatch.Groups[1].Value.Trim();
            return;
        }

        var endpointMatch = Regex.Match(content, @"HTTP Endpoint:\s*(.*)", RegexOptions.IgnoreCase);
        if (endpointMatch.Success)
        {
            feature.HttpEndpoint = endpointMatch.Groups[1].Value.Trim();
            return;
        }

        var entryMatch = Regex.Match(content, @"\(Entry Point\):\s*([^.\s\(]+)\.([^.\s\(\)]+)", RegexOptions.IgnoreCase);
        if (entryMatch.Success)
        {
            feature.EntryPoint.Class = entryMatch.Groups[1].Value.Trim();
            feature.EntryPoint.Method = entryMatch.Groups[2].Value.Trim();
        }
    }
}