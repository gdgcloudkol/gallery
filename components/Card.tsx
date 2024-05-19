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
        <div>
            <img src={setSize(url, 500, 500)} />
        </div>
    )
}

export default Card