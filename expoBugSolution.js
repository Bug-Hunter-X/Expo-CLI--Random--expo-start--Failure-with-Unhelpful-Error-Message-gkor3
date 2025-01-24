The issue might be related to a corrupted Expo cache or conflicting dependencies. Try these steps:

1. **Clear Expo Cache:**  Run `expo start --clear`
2. **Delete .expo folder and node_modules:**  Remove the `.expo` folder and the `node_modules` folder in your project directory.
3. **Reinstall Dependencies:** Run `npm install` or `yarn install`
4. **Restart Expo CLI:** `expo start`

If the problem persists, you might need to investigate more deeply into your project's configuration for any potential conflicts or errors.  If you've recently updated any dependencies, consider reverting to previous versions.