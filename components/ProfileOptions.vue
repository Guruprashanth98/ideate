<script setup lang="ts">
import {
  LogOut,
  User,
  UserCircle2,
} from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const routeToProfile = () => {
  navigateTo('/login/profile')
}

const hanko = useHanko()
function logout() {
  hanko!.user.logout()
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UserCircle2
        class="stroke-[1.5] cursor-pointer"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-56 mt-4 mr-[160px]"
    >
      <DropdownMenuLabel
        >My Account</DropdownMenuLabel
      >
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem @click="routeToProfile">
          <User class="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="logout">
          <LogOut class="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
