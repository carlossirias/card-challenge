import './App.css'
import { Card } from './components/Card'

function App() {
  const cards = [
    {
      id:'1',
      title:'Embracing Minimalism',
      image:'/cactus.png',
      body: `From minimalist sculptures to minimalist paintings, 
      this blog will inspire you to appreciate the beauty that lies in simplicity.`,
      smallText:'Annie Spratt',
      tags:['Design']
    }
  ]

  return (
    <>
      <main className='flex pt-[164px] w-screen h-screen justify-center'>
        {
          cards?.map((card)=>{
              return <Card
                      key={card.id}
                      image={card.image}
                      title={card.title}
                      body={card.body}
                      smallText={card.smallText}
                      tags={card.tags}/>
          })
        }
      </main>
    </>
  )
}

export default App
