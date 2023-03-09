import { FC } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import ShipSticksLogo from '@/images/ShipSticksLogo.png';

const navigation1 = [
  { name: 'Ship Golf Clubs', href: '#' },
  { name: 'Ship Skis', href: '#' },
  { name: 'Ship Luggage', href: '#' },
];
const navigation2 = [
  { name: 'Gift Cards', href: '#' },
  { name: 'Refer Friends', href: '#' },
  { name: 'Log In', href: '#' },
];

const navigation3 = [
  { name: 'Ship Now', href: '#' },
  { name: 'Track', href: '#' },
  { name: 'How It Works', href: '#' },
  { name: 'Golf Trip Ideas', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Help', href: '#' },
];

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="h-[800px] min-h-full bg-cover bg-hero-mobile md:bg-hero md:h-[886px] lg:h-[435px]">
        <Disclosure as="nav" className="border-b border-[#191818d2] bg-neutral-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-12">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 lg:hidden">
                      <img className="h-6 w-32" src={ShipSticksLogo} alt="ShipSticks" />
                    </div>
                    <div className="hidden lg:block">
                      <div className="flexspace-x-4">
                        {navigation1.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="border-l border-neutral-600 px-5 py-3 text-base text-gray-100 last:border-r hover:bg-neutral-500 hover:text-white"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="hidden lg:block">
                      <div className="flex items-baseline">
                        {navigation2.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="border-l border-neutral-600 px-5 py-3 text-base text-gray-100 last:border-r hover:bg-neutral-500 hover:text-white"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center border border-solid border-neutral-700 bg-neutral-800 p-1 text-gray-50 hover:bg-neutral-600 hover:text-white focus:bg-neutral-600 focus:outline-none focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="block h-5 w-8" aria-hidden="true" />
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Transition
                enter="transform duration-300 ease-in-out"
                enterFrom="-translate-y-full scale-y-0"
                enterTo="translate-y-full scale-y-100"
                leave="transition duration-300 transform ease-in-out"
                leaveFrom="translate-y-full scale-y-100"
                leaveTo="-translate-y-full scale-y-0"
              >
                <Disclosure.Panel className="fixed max-h-[340px] w-full overflow-y-auto border-t border-[#131313] bg-neutral-800 lg:hidden">
                  <div className="flex justify-around">
                    {navigation1.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="w-full border-r border-t border-neutral-700 py-3 text-center text-sm font-medium text-gray-100 last:border-t last:border-r-0"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-neutral-600 pb-5">
                    <div className="px-2">
                      {[...navigation3, ...navigation2].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="mx-[15px] mt-[18px] mb-[10px] block text-center text-lg font-medium text-gray-100 "
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <main className="mx-auto h-full">{children}</main>
      </div>
    </>
  );
};

export default Layout;
