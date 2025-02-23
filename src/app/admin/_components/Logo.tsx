import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-3">
      <Image
       className="w-[36px] h-[29px]"
        width={36}
        height={29}
        alt="logo"
        src="/menu.svg"
      />
      <div>
        <h2 className="text-black">
          Nom<span className="text-black">Nom</span>
        </h2>
        <p>Swift delivery</p>
      </div>
    </div>
  );
}
