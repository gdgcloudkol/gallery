import React from 'react'
import { setSize } from '@/services/gphoto.service';

function Card({
  url,
  className,
}: {
  url: string
  className?: string;
}) {
  return (
    url.indexOf('=') < 0 && (
      <div>
        <img src={setSize(url.substring(0, url.length - 1), 500, 500)} />
      </div>
    )
  )
}

export default Card