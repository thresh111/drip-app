import type { SVGProps } from 'react';

const svgModules = import.meta.glob<{
  default: React.ComponentType<SVGProps<SVGSVGElement>>;
}>('@/assets/svg/*.svg', {
  eager: true,
  query: '?react',
});

const getIconName = (path: string): string => {
  const fileName = path.split('/').pop() || '';
  return fileName.replace(/\.svg$/, '');
};

const svgIcons = Object.entries(svgModules).reduce(
  (acc, [path, module]) => {
    const name = getIconName(path);
    if (module && typeof module === 'object' && 'default' in module) {
      acc[name] = module.default;
    }
    return acc;
  },
  {} as Record<string, React.ComponentType<SVGProps<SVGSVGElement>>>,
);

type SvgIconName = keyof typeof svgIcons;

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: SvgIconName;
}

function SvgIcon({ name, ...props }: SvgIconProps) {
  const IconComponent = svgIcons[name];

  if (!IconComponent) {
    console.warn(`SVG icon "${name}" not found. Available icons: ${Object.keys(svgIcons).join(', ')}`);
    return null;
  }

  return <IconComponent {...props} />;
}

export default SvgIcon;
