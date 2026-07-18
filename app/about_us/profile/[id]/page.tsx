// // pages/profile/[id].tsx or app/profile/[id]/page.tsx
// 'use client'
// import { useRouter, useParams } from 'next/navigation'
// import ProfileModal from '../../components/ProfileModal'

// export default function Page() {
//   const router = useRouter()
//   const { id } = useParams()

//   return (
//     <>
//       {/* your regular page content */}
//       {id && (
//         <ProfileModal
//           personId={id as string}
//           onClose={() => router.back()} // or router.push('/')
//         />
//       )}
//     </>
//   )
// }