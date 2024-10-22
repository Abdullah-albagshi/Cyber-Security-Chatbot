import { ChatHistory } from "./chat-history"
import { IconNextChat } from "./ui/icons"
import Link from "next/link"
import { SidebarMobile } from "./sidebar-mobile"
import { SidebarToggle } from "./sidebar-toggle"
import { auth } from "@/auth"

async function OpenChatBar() {
  const session = await auth()
  return (
    <>
      {session?.user ? (
        <>
          {/* <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile> */}
          {/* <SidebarToggle /> */}
        </>
      ) : (
        <Link href="/" target="_blank" rel="nofollow">
          <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
          <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
        </Link>
      )}
    </>
  )
}

export default OpenChatBar
