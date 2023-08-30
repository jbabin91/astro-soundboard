import { Input } from '../../../components/ui/input';

export function NewBoardForm() {
  return (
    <form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        console.log('TODO: validation');

        await fetch('/api/boards/new', {
          method: 'POST',
          body: formData,
        });
      }}
    >
      <Input type="url" name="url" />
    </form>
  );
}
