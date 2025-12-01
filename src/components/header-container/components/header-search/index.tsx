import  {Input} from '@/src/components/ui/input';

export default function HeaderSearch() {
  return (
    <header data-component="header">
      <Input type="text" placeholder='Search for a product' />
    </header>
  );
}
