import { Button } from '@/components/ui/button'
import { useState } from 'react'

function App(): JSX.Element {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('')

  const sendHandle = async (): Promise<void> => {
    const msg = await window.electron.ipcRenderer.invoke('send_msg')
    setMsg(msg)
  }
  return (
    <div className="my-0 mx-auto py-24  w-3/5 h-[100vh] flex items-center justify-center">
      <div className="w-full h-full p-10 flex flex-col justify-between border-solid border-[1px] border-slate-300 rounded-md  ">
        <div>
          <p className="text-xl">Hello!</p>
          <p>{msg}</p>
        </div>
        <div className="flex justify-between">
          <Button onClick={() => setCount((n) => n + 1)}>{`Counter:${count}`}</Button>
          <Button variant="outline" onClick={sendHandle}>
            Send Message
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
