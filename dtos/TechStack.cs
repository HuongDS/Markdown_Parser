using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Markdown_Parser.dtos
{
    public class TechStack
    {
        public string Framework { get; set; } = string.Empty;
        public List<string> ThirdPartyLibraries { get; set; } = new List<string>();
    }
}
