/* eslint-disable @next/next/no-img-element */ 
import React from 'react';
import Link from 'next/link';   
import Image from 'next/image';

// interface Props {
//   articles: Article[];
// }

const NewsList = () => {
  return (
    <div className='font-bebas-neue w-2/3' >
      <h2 className='text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-2 mt-2'>Bài viết mới</h2>
      <nav>
        <ul> 
            <li>
              <Link className=' text-black no-underline' href={""}>
                <div className='flex'> 
                  <Image className='mb-10 ml-4 h-40' src={"/AI.jpeg"} alt="" width={"250"} height={"100"}></Image>
                  <div className='pl-5'>
                    <h4 className=' hover:text-blue-700 font-bold line-clamp-2'>Sự Tiến Bộ Của Trí Tuệ Nhân Tạo: Từ Học Sâu Đến Học Sâu Hơn Nữa</h4>
                    <div className='text-gray-700'>14/09/2023</div>
                    <p className='text-gray-400 text-sm line-clamp-3'>Trí tuệ nhân tạo (AI) đang trở thành một trong những ngành công nghiệp phát triển nhanh nhất, mang lại những cơ hội và thách thức mới. Bài viết này sẽ khám phá sự tiến bộ đáng kể trong lĩnh vực này và những ứng dụng tiên tiến như học sâu (deep learning) và các công nghệ tương lai.</p>
                  </div>
                </div>
              </Link>
            </li> 
        </ul>
      </nav>
    </div>
  );
};

export default NewsList;
