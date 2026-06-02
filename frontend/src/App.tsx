import { useState } from 'react'
import { Header } from './components/Header'
import { LeftPanel } from './components/LeftPanel'
import { RightPanel, type ProjectMapData } from './components/RightPanel'

function App() {
  const [data, setData] = useState<ProjectMapData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleParse = async (content: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: content,
      });

      if (!response.ok) {
        throw new Error('Failed to parse Markdown');
      }

      const result: ProjectMapData = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
      alert('Đã xảy ra lỗi khi phân tích file!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 selection:bg-primary/10 min-h-screen">
      <Header />
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)] bg-slate-50">
        <LeftPanel onParse={handleParse} isLoading={isLoading} />
        <RightPanel data={data} />
      </main>
    </div>
  )
}

export default App
