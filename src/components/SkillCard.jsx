export default function SkillCard({skill}) {
    return (
        <div className="bg-gray-50 border border-dashed border-gray-800 rounded p-2 font-['IBM_Plex_Mono'] text-center text-gray-600">
            <span>{skill}</span>
        </div>
    )
}