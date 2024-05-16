export class NavLink {
  label: string;
  path?: string;
  children: { label: string; path?: string }[];

  constructor(
    label: string,
    path: string,
    children: { label: string; path?: string }[] = []
  ) {
    this.label = label;
    this.path = path;
    this.children = children;
  }
}
