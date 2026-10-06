# Bộ ảnh demo — Massage in Dubai

Đây là bộ ảnh được tạo bằng công cụ tích hợp `image_gen.imagegen` để trình bày giao diện trước khi thay ảnh thật. Sáu gương mặt là nhân vật hư cấu. Tên, chi nhánh và các thông tin đang hiển thị trong thẻ nhân viên là dữ liệu mẫu của bản demo.

| Tệp | Kích thước | Vị trí sử dụng |
| --- | --- | --- |
| [logo.png](./logo.png) | 2172 × 724, PNG có nền trong suốt | Logo đầu trang và cuối trang |
| [banner.jpg](./banner.jpg) | 1672 × 941 | Ảnh nền phần mở đầu |
| [jumeirah-ella.jpg](./jumeirah-ella.jpg) | 1122 × 1402 | Thẻ ella |
| [jumeirah-adel.jpg](./jumeirah-adel.jpg) | 1122 × 1402 | Thẻ adel |
| [jumeirah-bella.jpg](./jumeirah-bella.jpg) | 1122 × 1402 | Thẻ bella |
| [al-furjan-jasmine.jpg](./al-furjan-jasmine.jpg) | 1122 × 1402 | Thẻ jasmine |
| [al-furjan-helen.jpg](./al-furjan-helen.jpg) | 1122 × 1402 | Thẻ helen |
| [al-furjan-viktoria.jpg](./al-furjan-viktoria.jpg) | 1122 × 1402 | Thẻ viktoria |

Ảnh JPEG được xuất ở chất lượng 90. PNG gốc được giữ trong thư viện ảnh được tạo của Codex. Logo PNG trong thư mục này giữ nguyên kênh alpha.

Để thay ảnh thật: thay tệp tương ứng trong thư mục này, hoặc đổi đường dẫn `src` trong `index.html`. Đường dẫn banner và vị trí cắt ảnh trên điện thoại nằm trong `assets/css/styles.css`. Sau khi có dữ liệu thật, cập nhật tên, mô tả và văn bản thay thế (`alt`) của từng nhân viên.

## Prompt logo ban đầu

```text
Use case: logo-brand.
Asset type: Final raster logo PNG for the header and footer of a luxury massage and wellness website named Massage in Dubai.
Primary request: Create one original, refined, elegant horizontal logo lockup. A graceful intertwined MD monogram at the left, a fine vertical divider, and the brand name at the right. The monogram should feel like an understated flowing signature with slender, confident strokes. The wordmark uses beautifully spaced, highly readable elegant serif typography.
Text (verbatim): "Massage" on the larger first line, "IN DUBAI" on the smaller second line with refined spaced capitals. Spell exactly. The monogram is M and D, never C or E.
Color palette: ivory-white wordmark and monogram, with restrained muted blush-coral accents (#de968d) on the divider and a subtle monogram flourish. Designed to be legible on dark charcoal and dark photography.
Composition/framing: Wide horizontal image around 3:1 aspect ratio, a single centered horizontal lockup, modest clear transparent padding of about 5 percent at the edges. Monogram on left occupies about a quarter of the total width. Brand name on right is clearly readable at small website header sizes.
Style/medium: Professional flat identity artwork with crisp clean edges, typography with tasteful contrast between thick and thin strokes. Sophisticated, quiet luxury; simple enough for a small header.
Constraints: Real transparent alpha background. No background color, mockup, card, presentation board, checkerboard pattern, texture, frame, extra icon, additional wording, drop shadow, gradient, glow, metallic 3D effect, watermark or unrelated brand. One logo only. Output should be a finished transparent PNG suitable for direct use on a website.
```

## Prompt hoàn thiện logo đã chọn

```text
Use case: precise-object-edit.
Asset type: Final transparent PNG website logo, artwork cleanup only.
Input image: Edit target, the generated Massage in Dubai logo with an MD monogram, coral flourish, vertical divider and ivory serif lettering. Its letter edges and fills currently contain unwanted distress, speckles and tiny holes.
Primary request: Clean up the existing logo into professional smooth, crisp, flat identity artwork. Remove every ragged edge, speckle, ink splatter, white halo, pinhole and scratched texture from the artwork. Redraw all letter contours with graceful perfectly smooth edges and uniform solid opaque interiors. Use elegant clean vector-like contours with tasteful thick/thin serif contrast. The monogram must be clearly recognizable as MD. Keep the same overall logo design, monogram at left, thin vertical coral divider, wordmark at right and balanced wide horizontal layout. Simplify any overly fussy tiny flourishes just enough for small-header legibility.
Text (verbatim): "Massage" above "IN DUBAI". Preserve exact spelling, line breaks and readable typography. No extra wording.
Color palette: Flat warm ivory (#faf4ee) for the monogram and wordmark and flat muted blush coral (#de968d) for the subtle flourish and divider. Completely solid fills, no outline artifacts.
Composition/framing: About 3:1 horizontal aspect ratio, modest transparent padding, one logo only.
Constraints: Genuine transparent alpha background, preserve transparency. No background color, mockup, checkerboard pattern, metallic reflection, gradient, shadow, texture, distress, 3D, noise, watermark or extra graphics. Deliver crisp logo artwork suitable for a dark website header.
```

## Prompt banner đã chọn

Bảng tham chiếu dùng cho banner gồm sáu chân dung được tạo trong bộ này, bố trí hai hàng và ba cột theo thứ tự Ella, Adel, Bella / Jasmine, Helen, Viktoria.

```text
Use case: photorealistic-natural.
Asset type: Wide homepage hero banner for a fictional Massage in Dubai website demo. One final landscape photograph, approximately 16:9, ideally 2048 by 1152 pixels.
Input image: One supporting character-reference sheet containing SIX separate fictional therapist portraits in a 2-row by 3-column grid. The sheet is ONLY an identity reference, not the output composition. TOP ROW left-to-right: panel 1 Ella, dark wavy shoulder-length brunette; panel 2 Adel, chestnut bob; panel 3 Bella, long auburn hair. BOTTOM ROW left-to-right: panel 4 Jasmine, dark low ponytail; panel 5 Helen, sandy blonde hair; panel 6 Viktoria, tan-skinned brunette with a bun. Include ALL SIX distinct women together in the final single group scene. Preserve their individual facial features, hairstyles, black uniforms and subtle gold MD embroidery. Do not copy the grid, panel borders, captions or names into the final banner.
Primary request: A warm, polished, believable editorial photograph of this six-person adult female spa therapist team welcoming guests inside a refined contemporary Dubai wellness spa. Friendly relaxed expressions and professional body language. Show six distinct women, not repeated faces.
Scene/backdrop: Beige travertine and taupe plaster, subtle walnut paneling, softly lit linen curtains, a restrained plant and a discreet candle vignette. No wall signage or additional wording. Warm, calm, sophisticated environment matching the portrait series.
Composition/framing: Wide horizontal hero. Keep the LEFT 38 to 42 percent of the frame as gently blurred, uncluttered darker warm walnut/taupe architectural negative space for the website's HTML title and buttons. All six therapists arranged close together across the CENTER-RIGHT and RIGHT of the photograph, occupying approximately x=42 percent to x=96 percent. A natural staggered arrangement of two slightly offset rows of three with clear faces, or a shallow arc that fits all six without crowding. Faces between roughly 22 and 46 percent of the image height, enough breathing room above every head, comfortably inside all edges. Include upper bodies to the hips, relaxed natural hands, no cropped heads. Keep the central four faces away from extreme edges so the image can also work under a mobile crop. Do not put people in the left text area.
Lighting/mood: Soft warm window light and gentle interior ambient lighting, luminous natural skin textures, editorial hospitality photography, realistic camera perspective and anatomy, understated natural makeup. Warm neutral color palette, matte black uniforms and subtle gold accents.
Constraints: Exactly six adult women, their identities consistent with the six individual portraits in the supporting reference sheet. One scene and one photograph, no collage or panels. No text, additional logos, watermarks, lettering, title baked into the picture, extra people, cloned faces, glamour poses or heavy beauty retouching.
```

## Prompt jumeirah-ella.jpg

```text
Use case: photorealistic-natural.
Asset type: Fictional spa employee portrait for a website demo, portrait 4:5 aspect ratio.
Primary request: An original photorealistic professional portrait of one fictional adult woman massage therapist, around 30 years old, with shoulder-length softly wavy dark brown hair, warm olive skin, brown eyes and an approachable relaxed smile. A completely new fictional person, not based on a celebrity or any uploaded real portrait.
Scene/backdrop: A refined contemporary Dubai wellness spa, warm taupe plaster walls and a softly blurred light linen curtain, a subtle hint of walnut wood, no signage. Same restrained warm editorial style as a coordinated employee portrait series.
Wardrobe: Modest black professional short-sleeved spa tunic, closed neckline, clean tailored fit. A very small simple gold MD monogram embroidered on the left chest; no other words or brand marks.
Composition/framing: Waist-up, eye-level, centered, facing camera with shoulders at a slight angle. Head entirely visible with modest space above hair. Face in the upper third, shoulders fully included, hands gently clasped at waist and fully natural. Framing suitable for a 4:5 team card.
Lighting/mood: Large soft warm window light, gentle fill, natural skin texture, believable photographic details, tasteful natural makeup, welcoming and professional. Color palette: beige, warm neutrals, matte black, subtle gold. Portrait lens 85mm look, shallow depth of field.
Constraints: One adult person only, realistic anatomy and hands, no text, watermark, collage, heavy glamour retouching, fashion runway styling or unrelated branding.
```

## Prompt jumeirah-adel.jpg

```text
Use case: photorealistic-natural.
Asset type: Fictional spa employee portrait for a website demo, portrait 4:5 aspect ratio.
Primary request: An original photorealistic professional portrait of one fictional adult woman massage therapist, around 32 years old, with a neat chestnut brown chin-length bob, light warm skin, hazel eyes, slightly rounded face and a friendly subtle smile. A completely new fictional person, not based on a celebrity or any uploaded real portrait.
Scene/backdrop: A refined contemporary Dubai wellness spa, warm taupe plaster walls and a softly blurred light linen curtain, a subtle hint of walnut wood, no signage. Same restrained warm editorial style as a coordinated employee portrait series.
Wardrobe: Modest black professional short-sleeved spa tunic, closed neckline, clean tailored fit. A very small simple gold MD monogram embroidered on the left chest; no other words or brand marks.
Composition/framing: Waist-up, eye-level, centered, shoulders turned slightly to the left of the image, looking toward camera. Head entirely visible with modest space above hair. Face in the upper third, shoulders fully included, hands resting naturally together at waist. Framing suitable for a 4:5 team card.
Lighting/mood: Large soft warm window light, gentle fill, natural skin texture, believable photographic details, tasteful natural makeup, welcoming and professional. Color palette: beige, warm neutrals, matte black, subtle gold. Portrait lens 85mm look, shallow depth of field.
Constraints: One adult person only, realistic anatomy and hands, no text, watermark, collage, heavy glamour retouching, fashion runway styling or unrelated branding.
```

## Prompt jumeirah-bella.jpg

```text
Use case: photorealistic-natural.
Asset type: Fictional spa employee portrait for a website demo, portrait 4:5 aspect ratio.
Primary request: An original photorealistic professional portrait of one fictional adult woman massage therapist, around 29 years old, with long softly curled auburn hair, light skin with a few natural freckles, brown eyes, an oval face and a warm smile. A completely new fictional person, not based on a celebrity or any uploaded real portrait.
Scene/backdrop: A refined contemporary Dubai wellness spa, warm taupe plaster walls and a softly blurred light linen curtain, a subtle hint of walnut wood, no signage. Same restrained warm editorial style as a coordinated employee portrait series.
Wardrobe: Modest black professional short-sleeved spa tunic, closed neckline, clean tailored fit. A very small simple gold MD monogram embroidered on the left chest; no other words or brand marks.
Composition/framing: Waist-up, eye-level, centered, facing camera with a slight turn of the shoulders to the right. Head entirely visible with modest space above hair. Face in the upper third, shoulders fully included, hands comfortably clasped at waist. Framing suitable for a 4:5 team card.
Lighting/mood: Large soft warm window light, gentle fill, natural skin texture, believable photographic details, tasteful natural makeup, welcoming and professional. Color palette: beige, warm neutrals, matte black, subtle gold. Portrait lens 85mm look, shallow depth of field.
Constraints: One adult person only, realistic anatomy and hands, no text, watermark, collage, heavy glamour retouching, fashion runway styling or unrelated branding.
```

## Prompt al-furjan-jasmine.jpg

```text
Use case: photorealistic-natural.
Asset type: Fictional spa employee portrait for a website demo, portrait 4:5 aspect ratio.
Primary request: An original photorealistic professional portrait of one fictional adult woman massage therapist, around 31 years old, with straight dark hair tied back in a low ponytail, medium warm skin, dark almond-shaped eyes, softly defined cheekbones and a gentle confident smile. A completely new fictional person, not based on a celebrity or any uploaded real portrait.
Scene/backdrop: A refined contemporary Dubai wellness spa, warm taupe plaster walls and a softly blurred light linen curtain, a subtle hint of walnut wood, no signage. Same restrained warm editorial style as a coordinated employee portrait series.
Wardrobe: Modest black professional short-sleeved spa tunic, closed neckline, clean tailored fit. A very small simple gold MD monogram embroidered on the left chest; no other words or brand marks.
Composition/framing: Waist-up, eye-level, centered, shoulders at a gentle three-quarter angle, looking toward camera. Head entirely visible with modest space above hair. Face in the upper third, shoulders fully included, hands comfortably clasped at waist. Framing suitable for a 4:5 team card.
Lighting/mood: Large soft warm window light, gentle fill, natural skin texture, believable photographic details, tasteful natural makeup, welcoming and professional. Color palette: beige, warm neutrals, matte black, subtle gold. Portrait lens 85mm look, shallow depth of field.
Constraints: One adult person only, realistic anatomy and hands, no text, watermark, collage, heavy glamour retouching, fashion runway styling or unrelated branding.
```

## Prompt al-furjan-helen.jpg

```text
Use case: photorealistic-natural.
Asset type: Fictional spa employee portrait for a website demo, portrait 4:5 aspect ratio.
Primary request: An original photorealistic professional portrait of one fictional adult woman massage therapist, around 35 years old, with sandy blonde shoulder-length hair tucked neatly behind one ear, fair skin, blue eyes, softly angular face and an approachable smile. A completely new fictional person, not based on a celebrity or any uploaded real portrait.
Scene/backdrop: A refined contemporary Dubai wellness spa, warm taupe plaster walls and a softly blurred light linen curtain, a subtle hint of walnut wood, no signage. Same restrained warm editorial style as a coordinated employee portrait series.
Wardrobe: Modest black professional short-sleeved spa tunic, closed neckline, clean tailored fit. A very small simple gold MD monogram embroidered on the left chest; no other words or brand marks.
Composition/framing: Waist-up, eye-level, centered, facing camera with one shoulder slightly nearer. Head entirely visible with modest space above hair. Face in the upper third, shoulders fully included, hands resting together at waist. Framing suitable for a 4:5 team card.
Lighting/mood: Large soft warm window light, gentle fill, natural skin texture, believable photographic details, tasteful natural makeup, welcoming and professional. Color palette: beige, warm neutrals, matte black, subtle gold. Portrait lens 85mm look, shallow depth of field.
Constraints: One adult person only, realistic anatomy and hands, no text, watermark, collage, heavy glamour retouching, fashion runway styling or unrelated branding.
```

## Prompt al-furjan-viktoria.jpg

```text
Use case: photorealistic-natural.
Asset type: Fictional spa employee portrait for a website demo, portrait 4:5 aspect ratio.
Primary request: An original photorealistic professional portrait of one fictional adult woman massage therapist, around 28 years old, with dark brown hair arranged in a neat bun, warm tan skin, expressive brown eyes, softly oval face and a bright but natural smile. A completely new fictional person, not based on a celebrity or any uploaded real portrait.
Scene/backdrop: A refined contemporary Dubai wellness spa, warm taupe plaster walls and a softly blurred light linen curtain, a subtle hint of walnut wood, no signage. Same restrained warm editorial style as a coordinated employee portrait series.
Wardrobe: Modest black professional short-sleeved spa tunic, closed neckline, clean tailored fit. A very small simple gold MD monogram embroidered on the left chest; no other words or brand marks.
Composition/framing: Waist-up, eye-level, centered, shoulders slightly angled, looking toward camera. Head entirely visible with modest space above hair. Face in the upper third, shoulders fully included, hands gently clasped in front at waist. Framing suitable for a 4:5 team card.
Lighting/mood: Large soft warm window light, gentle fill, natural skin texture, believable photographic details, tasteful natural makeup, welcoming and professional. Color palette: beige, warm neutrals, matte black, subtle gold. Portrait lens 85mm look, shallow depth of field.
Constraints: One adult person only, realistic anatomy and hands, no text, watermark, collage, heavy glamour retouching, fashion runway styling or unrelated branding.
```

