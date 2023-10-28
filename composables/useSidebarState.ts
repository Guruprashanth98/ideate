type SidebarExpanded = boolean

export const useSidebarState = () => {
  const sidebarExpanded =
    useState<SidebarExpanded>(
      'sidebarExpanded',
      () => true,
    )

  const setSidebarExpanded = (payload: boolean) =>
    (sidebarExpanded.value = payload)

  return { sidebarExpanded, setSidebarExpanded }
}
