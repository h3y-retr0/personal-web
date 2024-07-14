import { Nav } from './components/Nav';

function App() {
  return (
    <main className='font-inter h-screen w-screen bg-Background text-White-Custom'>
      <div className='max-w-sm md:max-w-xl lg:max-w-3xl w-full mx-auto xl:pt-[40px]'>
        <Nav />
      </div>
    </main>
  );
}

export default App;
