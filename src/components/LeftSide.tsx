import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuItem {
  id: string;
  title: string;
  subItems?: MenuItem[];
  href: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'menu1',
    title: 'Menu Item 1',
    href: '/dashboard/menu1',
    subItems: [
      { id: 'submenu1', title: 'Submenu Item 1', href: '/dashboard/submenu1' },
      { id: 'submenu2', title: 'Submenu Item 2', href: '/dashboard/submenu2' },
    ],
  },
  { id: 'menu2', title: 'Menu Item 2', href: '/dashboard/menu2' },
  { id: 'menu3', title: 'Menu Item 3', href: '/dashboard/menu3' },
  {
    id: 'menu4',
    title: 'Menu Item 4',
    href: '/dashboard/menu4',
    subItems: [
      { id: 'submenu3', title: 'Submenu Item 3', href: '/dashboard/submenu3' },
      { id: 'submenu4', title: 'Submenu Item 4', href: '/dashboard/submenu4' },
    ],
  },
];

const LeftSidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const router = useRouter();

  const handleItemClick = (item: string, href: string) => {
    setSelectedItem(item);
    router.push(href);
  };

  return (
    <aside className="bg-gray-200 h-screen flex flex-col">
      <ul className="flex flex-col space-y-2 flex-grow">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href} passHref>
              <a
                className={`p-2 ${selectedItem === item.title ? 'bg-blue-500 text-white' : ''} border border-gray-300`}
                onClick={() => handleItemClick(item.title, item.href)}
              >
                {item.title}
              </a>
            </Link>
            {item.subItems && (
              <ul className="pl-4 mt-2">
                {item.subItems.map((subItem) => (
                  <li key={subItem.id}>
                    <Link href={subItem.href} passHref>
                      <a
                        className={`p-2 ${selectedItem === subItem.title ? 'bg-blue-500 text-white' : ''} border border-gray-300`}
                        onClick={() => handleItemClick(subItem.title, subItem.href)}
                      >
                        {subItem.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
