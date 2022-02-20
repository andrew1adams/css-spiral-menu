import React, { useState } from 'react';
import {
  AiOutlinePlus,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineMail,
  AiOutlineAliwangwang,
  AiOutlineCamera,
  AiOutlineKey,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import { Container } from './style';

const SpiralMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container isOpen={openMenu}>
      <ul>
        <AiOutlinePlus
          size="64"
          className="icon menu"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
        <li style={{ '--i': 0 }}>
          <AiOutlineHome size="64" className="icon home" />
        </li>
        <li style={{ '--i': 1 }}>
          <AiOutlineUser size="64" className="icon user" />
        </li>
        <li style={{ '--i': 2 }}>
          <AiOutlineSetting size="64" className="icon setting" />
        </li>
        <li style={{ '--i': 3 }}>
          <AiOutlineMail size="64" className="icon mail" />
        </li>
        <li style={{ '--i': 4 }}>
          <AiOutlineKey size="64" className="icon key" />
        </li>
        <li style={{ '--i': 5 }}>
          <AiOutlineVideoCamera size="64" className="icon videocam" />
        </li>
        <li style={{ '--i': 6 }}>
          <AiOutlineCamera size="64" className="icon camera" />
        </li>
        <li style={{ '--i': 7 }}>
          <AiOutlineAliwangwang size="64" className="icon ghost" />
        </li>
      </ul>
    </Container>
  );
};

export default SpiralMenu;
