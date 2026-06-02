using System;
using System.IO;
using System.Text.Json;
using Markdown_Parser;
using Markdown_Parser.dtos;

class Program
{
    static void Main(string[] args)
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8;
        Console.InputEncoding = System.Text.Encoding.UTF8;

        Console.WriteLine("=== PARSER FILE PROJECT_MAP.MD ===");

        string baseDir = AppDomain.CurrentDomain.BaseDirectory;
        string filePath = Path.Combine(baseDir, "PROJECT_MAP.md");

        Console.WriteLine($"Đang đọc file tại hệ thống đầu ra: {filePath}");

        if (!File.Exists(filePath))
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"[LỖI] Không tìm thấy file PROJECT_MAP.md!");
            Console.WriteLine("Vui lòng thực hiện Bước 2 bên dưới để cấu hình Copy file tự động.");
            Console.ResetColor();
            return;
        }

        try
        {
            ProjectBusinessMap result = ProjectMapParser.Parse(filePath);

            var options = new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            };

            string jsonResult = JsonSerializer.Serialize(result, options);

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("\n--- SUCCESS ---");
            Console.ResetColor();
            Console.WriteLine(jsonResult);
        }
        catch (Exception ex)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"[ERROR]: {ex.Message}");
            Console.ResetColor();
        }

        Console.WriteLine("\nPress any key to exit...");
        Console.ReadKey();
    }
}


