'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { collection,addDoc , getDocs,updateDoc, query, where ,getDoc ,doc , setDoc, orderBy, limit, increment, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from "@config/Firebase"
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import 'quill/dist/quill.bubble.css'
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
const variants = ['h1', 'h3', 'body1', 'caption'];

const ReactQuill = dynamic(() => import('react-quill'), { // Dynamically import ReactQuill
  ssr: false, // Disable server-side rendering
});

function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
           <Skeleton /> 
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

const page = () => {
    const [blog,setBlog] = useState('');
    const searchParams = useSearchParams()
 
    const blogid = searchParams.get('id');
    // console.log("Blogid",blogid);

  //   useEffect(()=>{
 
  //    const getcontent = async()=>{
  //      const contentsCollection = collection(db, "Contents");
  //      const contentDoc = doc(contentsCollection, blogid);
  //    const contentSnapshot = await getDoc(contentDoc);
  //    if (contentSnapshot.exists()) {
  //      let p = contentSnapshot.data();
  //      console.log("content",p.title);
       
  //      document.title = `${p.title} | Admin`;
  //      document.querySelector('meta[name="description"]')
  //      setBlog( {
  //        id: contentSnapshot.id,
  //        data: contentSnapshot.data(),
  //      });
  //    } else {
  //      console.log("Document not found!");
  //      return null;
  //    }
  //    }
 
  //    getcontent();
  //  },[blogid])

    useEffect(()=>{
         GetBlogData()
    },[blogid]);

    const GetBlogData = async ()=>{
        let response = await fetch(`/api/blog/getsingleblog/${blogid}`);
        const data = await response.json();
        setBlog(data);
    }

   
  
    var formats = [
      "header", "height", "bold", "italic",
      "underline", "strike", "blockquote",
      "list", "color", "bullet", "indent",
      "link", "image", "align", "size","video","code-block","font","clean"
    ];


  return (
   <Suspense>
    {
        blog ? 
        <div className='w-[100%] px-5 flex items-center justify-center'>
        
        <div className='w-[100%] md:w-[700px] flex gap-5 flex-col mb-20 lg:w-[800px]'>
        <h1 className='text-[30px] md:text-[50px] font-bold'>{blog.title}</h1>
        <img src={blog.coverimage} alt="coverimage..." />
        <ReactQuill
        value={blog.blogdata}
        readOnly={true}
        theme="bubble"
       
        formats={formats}
        modules={{ toolbar: false }}
        />
      </div>
        
      </div>
     
      :
      <div className='w-[100%] flex items-center justify-center'>
      <Grid container xs={{width:"300px"}} spacing={4}>
        <Grid item xs></Grid>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        {/* <TypographyDemo /> */}
      </Grid>
    </Grid>
    </div>
    }
   </Suspense>
  )
}

export default page