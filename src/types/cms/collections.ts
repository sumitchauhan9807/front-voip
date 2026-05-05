import {TitleWithImage,MediaType,TitleType} from './dynamic-zone'

export type CertificationType =  TitleWithImage

export type LogoType = MediaType

export type TestimonialType = {
  title:TitleType,
  points:TitleWithImage[]
}