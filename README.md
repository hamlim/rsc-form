# `rsc-form`

A thin React client form component that automatically resets the form after submission.

## Installation:

```sh
bun add rsc-form
```

## Usage:

```tsx
import {Form} from 'rsc-form'

function ServerComponent() {
  async function handleSubmit(formData) {
    "use server"
    // do something
  }
  return (
    <Form action={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </Form>
  )
}
```

## Contributing:

### `build`

```sh
bun run build
```

### `test`

```sh
bun test
```

### Tools:

- Typescript
- SWC
- Bun
