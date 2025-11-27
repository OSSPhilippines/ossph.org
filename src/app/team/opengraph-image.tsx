import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { activeVolunteers } from '@/data/team';

export const alt = 'OSSPH Team';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const photoPositions = [
  // Left side - scattered vertically
  { top: 40, left: 50, size: 72 },
  { top: 140, left: 110, size: 68 },
  { top: 250, left: 45, size: 76 },
  { top: 360, left: 100, size: 70 },
  { top: 470, left: 55, size: 74 },
  { top: 550, left: 120, size: 66 },
  // Right side - scattered vertically
  { top: 40, left: 1075, size: 70 },
  { top: 140, left: 1020, size: 74 },
  { top: 250, left: 1080, size: 68 },
  { top: 360, left: 1030, size: 72 },
  { top: 470, left: 1070, size: 76 },
  { top: 550, left: 1015, size: 68 },
  // Additional corner positions
  { top: 35, left: 170, size: 58 },
  { top: 35, left: 970, size: 60 },
];

async function getImageAsBase64(filename: string): Promise<string | null> {
  try {
    const imagePath = join(process.cwd(), 'public', 'images', filename);
    const imageBuffer = await readFile(imagePath);
    return `data:image/png;base64,${imageBuffer.toString('base64')}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const volunteerCount = activeVolunteers.length;

  const [molotFont, robotoFont] = await Promise.all([
    readFile(join(process.cwd(), 'public', 'fonts', 'Molot.otf')),
    readFile(join(process.cwd(), 'public', 'fonts', 'RobotoCondensed-Regular.ttf')),
  ]);

  const membersWithPhotos = activeVolunteers
    .filter(m => m.photo && m.photo !== 'no-photo.png')
    .slice(0, photoPositions.length);

  const memberPhotos = await Promise.all(
    membersWithPhotos.map(async (member, index) => ({
      src: await getImageAsBase64(member.photo),
      position: photoPositions[index],
    }))
  );

  const validPhotos = memberPhotos.filter(p => p.src !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e3f9ff 100%)',
          fontFamily: 'Roboto Condensed',
          position: 'relative',
          padding: 60,
        }}
      >
        {validPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src!}
            width={photo.position.size}
            height={photo.position.size}
            style={{
              position: 'absolute',
              top: photo.position.top,
              left: photo.position.left,
              width: photo.position.size,
              height: photo.position.size,
              borderRadius: '50%',
              border: '3px solid rgba(0, 96, 160, 0.2)',
              objectFit: 'cover',
            }}
          />
        ))}

        <div style={{ fontSize: 80, marginBottom: 24 }}>
          💙
        </div>

        <h1
          style={{
            fontFamily: 'Molot',
            fontSize: 72,
            fontWeight: 400,
            background: 'linear-gradient(to right, #0060A0 0%, #7524B3 50%, #CF557D 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          OSSPH Team
        </h1>

        <p
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: '#64748b',
            margin: '24px 0 0 0',
            textAlign: 'center',
          }}
        >
          Meet the volunteers building the community
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 32,
            padding: '12px 28px',
            backgroundColor: '#0060A0',
            borderRadius: 9999,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff' }}>
            {volunteerCount} Active Volunteers
          </span>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: '#94a3b8' }}>
            ossph.org
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Molot',
          data: molotFont,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Roboto Condensed',
          data: robotoFont,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
