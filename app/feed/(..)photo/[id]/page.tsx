import { Modal } from "antd";
export default function Page ({ params }) {
  return (
    <Modal
      title={params.id}
      open={true}
    ></Modal>
  )
}