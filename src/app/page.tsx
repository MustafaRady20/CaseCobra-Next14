import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from 'lucide-react';
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src="/snake-1.png" alt="snake" className="w-full" fill />
              </div>
              <h1 className="relative w-fit tracking-tighter text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> phone case</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap text-gray-600">
                capture your favorite memories with your own,{' '} <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-meduim flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left text-gray-700">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left text-gray-700">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    5 years print gurantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left text-gray-700">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iphone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image className="inline-block rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="user Image" width={50} height={50} />
                  <Image className="inline-block rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="user Image" width={50} height={50} />
                  <Image className="inline-block rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="user Image" width={50} height={50} />
                  <Image className="inline-block rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" alt="user Image" width={50} height={50} />
                  <Image className="inline-block object-cover rounded-full ring-2 ring-slate-100" src="/users/user-5.jpg" alt="user Image" width={50} height={50} />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0 5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
