using System;
using System.IO;
using System.Text.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Markdown_Parser;
using Markdown_Parser.dtos;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowAll");

app.MapPost("/api/parse", async (Microsoft.AspNetCore.Http.HttpContext context) =>
{
    using var reader = new StreamReader(context.Request.Body);
    var content = await reader.ReadToEndAsync();
    
    try
    {
        var result = ProjectMapParser.ParseContent(content);
        return Microsoft.AspNetCore.Http.Results.Ok(result);
    }
    catch (Exception ex)
    {
        return Microsoft.AspNetCore.Http.Results.BadRequest(new { error = ex.Message });
    }
});

Console.WriteLine("Server is running on http://localhost:5000");
app.Run("http://localhost:5000");
