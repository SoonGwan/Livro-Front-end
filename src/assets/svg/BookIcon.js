import * as React from "react"

function BookIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={21}
      height={25}
      viewBox="0 0 21 25"
      {...props}
    >
      <defs>
        <pattern
          id="prefix__a"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 340 404"
        >
          <image
            width={340}
            height={404}
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <path fill="url(#prefix__a)" d="M0 0h21v25H0z" />
    </svg>
  )
}

export default BookIcon;
