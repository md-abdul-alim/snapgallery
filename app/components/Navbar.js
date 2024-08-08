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
            {
              navigation.categories.map((category) => (
                <Popover key={category.id} className="relative">
                  <PopoverButton>
                    {category.name}
                  </PopoverButton>

                  <PopoverPanel  className="flex flex-col">
                    {
                      category.featured.map((item) => (
                        <div key={item.name}>
                          <a href={item.href}>{item.name}</a>
                        </div>
                      ))
                    }
                  </PopoverPanel>
                </Popover>
              ))
            }
          </PopoverGroup>
        </nav>
      </header>
    </div>
  )
}
