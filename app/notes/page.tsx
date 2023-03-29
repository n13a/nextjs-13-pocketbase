import Link from "next/link"
async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/nitepad/records?page=1&perPage=30')

    const data = await res.json()
    return data?.items as any[]
}

export default async function NotesPage() {
    const notes = await getNotes()
    return (
        <div>
            {notes?.map(note => <Note key={note.id} note={note} />
            )}
        </div>
    )
}


function Note({ note }: any) {
    const { id, title, content, created } = note || {}
    console.log(title)

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}