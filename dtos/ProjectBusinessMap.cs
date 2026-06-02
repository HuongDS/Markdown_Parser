using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Markdown_Parser.dtos
{
    public class ProjectBusinessMap
    {
        public TechStack TechStack { get; set; } = new TechStack();
        public List<BusinessFeature> Features { get; set; } = new List<BusinessFeature>();
    }
}
