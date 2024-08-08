'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'

import {navigation} from './navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-white'>
      <header>
        <nav>
          <PopoverGroup>
            <div className="flex h-full space-x-8">
              {
                navigation.categories.map((category) => (
                  <Popover key={category.id}>
                    <div className='relative flex'>
                      <PopoverButton>
                        {category.name}
                      </PopoverButton>
                    </div>

                    <PopoverPanel transition className="absolute flex-col">
                      {
                        category.featured.map((item) => (
                          <div key={item.name} className='relative'>
                            <a href={item.href}>{item.name}</a>
                          </div>
                        ))
                      }
                    </PopoverPanel>
                  </Popover>
                ))
              }
            </div>
          </PopoverGroup>
        </nav>
      </header>
    </div>
  )
}
