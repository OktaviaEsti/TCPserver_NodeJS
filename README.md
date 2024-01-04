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
![tutorial 1](https://github.com/OktaviaEsti/TCPserver_NodeJS/assets/7498207/cd8c2f4d-b42f-42ee-b510-c21e82d7c276)
5. Make a connection to TCP server using ncat. 
```
ncat 127.0.0.1 8800
```

4. Start sending messages by type the message in the terminal then click enter
5. Make another connection by opening new terminal and ncat command.
