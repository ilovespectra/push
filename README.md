# Push

Forked from [Will Snowdon's react-shadow-drive Repo](https://github.com/WillSnowdon/react-shadow-drive)

A react hook and some helpers/extra typing for [GenesysGo's](https://shdw.genesysgo.com/) Shadow Drive javascript SDK.

Note: Package API subject to change often in near future

[Material UI Example App](https://bitslurp.me/files)

## Setup

### Installation

`yarn add react-shadow-drive @shadow-drive/sdk`

### Usage

Checkout the example file management app for full usage info but quick setup would look something like this

```tsx
const ShadowDriveComponent: FC = () => {
  const { ready, refreshStorageAccounts, storageAccounts } = useShadowDrive();

  useEffect(() => {
    if (!ready) return;

    refreshStorageAccounts();
  }, [ready]);

  return (
    <>
      {storageAccounts &&
        storageAccounts.map(({ acccount, publicKey }) => (
          <span key={publicKey.toString()}>{account.identifier}</span>
        ))}
    </>
  );
};
```
