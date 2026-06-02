using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Markdown_Parser.dtos
{
    public class BusinessFeature
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string HttpEndpoint { get; set; } = string.Empty;
        public EntryPoint EntryPoint { get; set; } = new EntryPoint();
    }
}
