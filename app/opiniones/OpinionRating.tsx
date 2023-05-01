"use client";
import { Rating } from "react-simple-star-rating";

export default function OpinionRating ({rate} : {rate: number}) {
  return (
    <Rating initialValue={rate} allowFraction size={15} readonly />
  )
}