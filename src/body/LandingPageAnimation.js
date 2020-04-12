import styled from 'styled-components'
import { slideInRight,
         slideOutRight,
         slideInDown,
         slideOutDown} from 'react-animations';

import LandingPage1 from '../assets/LandingPage1.png';
import { landingPageKeyFrame } from './KeyFrames';

export const Page = styled.img.attrs({
  src: LandingPage1
})`
  display: inline-block;
  width: 200px;
  height: 200px;
  position: relative;
  animation-iteration-count: infinite;
`

export default Page;
