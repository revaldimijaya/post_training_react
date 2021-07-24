/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                  <a
                    href="/"
                    className="border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    List Album
                  </a>
                  <a
                    href="/favorite"
                    className="border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Favorite Track
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <a
                href="/"
                className="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                List Album
              </a>
              <a
                href="/favorite"
                className="border-transparent  hover:bg-gray-50 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Favorite Track
              </a>
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
