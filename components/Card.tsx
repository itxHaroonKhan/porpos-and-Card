import Image from "next/image";


interface Icampro {
  tital: string;
  num:number;
  name: string;
  pragarp:string;
  Image: {
    src: string;
    alt: string;
  };
  button:string;
  dolar:number
}

const Card = (pro: Icampro) => {
  return (
    <div className="flex flex-col h-[534px] w-[416px] bg-[#F7F7F7] rounded-md shadow-md">
      {/* Image */}
      <Image src={pro.Image.src} alt={pro.Image.alt} width={416} height={300}  />
      
      {/* Title and Name */}
      <div className="flex justify-between">
      <h1 className="text-xl font-semibold mb-2 ml-2">{pro.tital}</h1>
<span className="font-bold"> {pro.num}.0 <span className="text-[#D9D9D9]">★</span></span>
      </div>
      
      <h2 className="text-[24px] font-bold ml-2">{pro.name}</h2>
      <p className="text-[16px] ml-2">{pro.pragarp}</p>

<div className="flex gap-4">
<button className="mt-4 w-[117] h-10 ml-2 rounded-md border-2 border-slate-950 hover:bg-blue-700">
  {pro.button}
</button>

{/* Dollar Amount */}
<p className="text-[20px] font-semibold  mt-4">${pro.dolar}</p>
</div>
      
      
    </div>
  );
};

export default Card;
