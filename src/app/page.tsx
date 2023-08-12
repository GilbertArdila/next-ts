import { RandomFox } from "@/components/RandomFox";

//function to generate a random number
const random = ():number => Math.floor(Math.random() * 123) + 1;
const image:string = `https://randomfox.ca/images/${random()}.jpg`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <RandomFox image={image} alt={'A fox image'}/>
      
    </main>
  )
}
