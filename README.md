# TCP Server with Javascript using NodeJS

1. Run code in VSCode 
2. If 'net' library is not detected,
```diff
- Process exited with code 1
- (node:15348) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
- (Use `node --trace-warnings ...` to show where the warning was created)
- warning:60
- Uncaught SyntaxError D:\XXXX\XXXX\XXXX\TCPSserver_NodeJS\INDEX.MJS:1
- import net from 'net'; 
- ^^^^^^

- SyntaxError: Cannot use import statement outside a module
-    at internalCompileFunction (internal/vm:77:18)
-     at wrapSafe (internal/modules/cjs/loader:1288:20)
-     at Module._compile (internal/modules/cjs/loader:1340:27)
-     at Module._extensions..js (internal/modules/cjs/loader:1435:10)
-     at Module.load (internal/modules/cjs/loader:1207:32)
-     at Module._load (internal/modules/cjs/loader:1023:12)
-     at executeUserEntryPoint (internal/modules/run_main:135:12)
-     at <anonymous> (internal/main/run_main_module:28:49)
```
  change the import format to this. 

```jsx
// import net from 'net';  
var net = require('net')
```
3. Open terminal ⇒ cd to nmap directory
4. Make a connection to TCP server using ncat. 

```terminal
ncat 127.0.0.1 8800
```

1. Start sending messages by inputting it in terminal then click enter
2. Make another connection by opening new terminal and ncat command.
