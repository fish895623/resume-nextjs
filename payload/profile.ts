import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import image from '../asset/_sample.jpg'
import { IProfile } from '../component/profile/IProfile'

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Lorem ipsum',
    small: '(fish895623)',
  },
  contact: [
    {
      title: 'dan990429@gmail.com',
      link: '',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/fish895623/fish895623.git',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일 혹은 깃헙 이슈로 연락 부탁드립니다.',
    icon: faBell,
  },
}

export default profile
