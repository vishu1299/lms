import { File } from 'lucide-react'

const Attachment = () => {
    return (
        <div className="space-y-4">
            <AttachmentItem
                icon={<File size={42} className=" text-white fill-[#CBDFF2]" />}
                fileName="Sketch Modules.pdf"
                chapter="Chapter 1"
                fileSize="14.1Mb"
            />
            <AttachmentItem
                icon={<File size={42} className=" text-white fill-[#CBDFF2]" />}
                fileName="Course Detail.doc"
                chapter="Chapter 2"
                fileSize="14.1Mb"
            />
            <AttachmentItem
                icon={<File size={42} className=" text-white fill-[#CBDFF2]" />}
                fileName="Sketch Modules.pdf"
                chapter="Chapter 3"
                fileSize="14.1Mb"
            />
            <AttachmentItem
                icon={<File size={42} className=" text-white fill-[#CBDFF2]" />}
                fileName="Course Detail.doc"
                chapter="Chapter 4"
                fileSize="14.1Mb"
            />
        </div>
    )
}

export default Attachment

function AttachmentItem({
    icon,
    fileName,
    chapter,
    fileSize,
}: {
    icon: React.ReactNode
    fileName: string
    chapter: string
    fileSize: string
}) {
    return (
        <div className="flex items-center space-x-2">
            <div className={` rounded-md flex items-center justify-center`}>{icon}</div>
            <div className='text-[#93989A]'>
                <h4 className="font-medium">{fileName}</h4>
                <div className="flex items-center space-x-2 text-xs">
                    <span>{chapter}</span>
                    <span> | </span>
                    <span>{fileSize}</span>
                </div>
            </div>
        </div>
    )
}