import Image from "next/image";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href={'/'} className="flex flex-row items-center justify-center font-bold text-xl md:text-2xl gap-2 hover:opacity-80 transition-opacity">
      <Image src={'/assets/taxi.svg'} alt="text logo" height={60} width={60} />
      <div className="flex flex-col leading-none">
        <span className="font-bold">Taxi Co</span>
        <span className="text-xs text-muted-foreground font-normal">More then just a Taxi Service</span>
      </div>
    </Link>
  )
}

