import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            {/* change */}
            <Link href="" className="link-underline">
              Sidharth Singh{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            {/* change */}
            <Link href="" className="link-underline">
              Hope your day is as legendary as a One Piece treasure! 🏴‍☠️!
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
