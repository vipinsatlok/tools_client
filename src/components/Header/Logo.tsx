import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src={"/vercel.svg"} width={100} height={100} alt="logo" />
    </div>
  );
}
