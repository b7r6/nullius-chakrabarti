{
  description = "Nullius Chakrabarti - Game-theoretic candidate analysis";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        packages.default = pkgs.stdenv.mkDerivation {
          name = "nullius-chakrabarti";
          src = ./.;

          buildInputs = [ pkgs.nodejs_20 ];

          buildPhase = ''
            node build.js
          '';

          installPhase = ''
            mkdir -p $out
            cp -r dist/* $out/
          '';
        };

        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            nodePackages.serve
          ];

          shellHook = ''
            echo "Nullius Chakrabarti dev environment"
            echo ""
            echo "Commands:"
            echo "  node build.js  - Build the site"
            echo "  npx serve dist - Serve locally"
            echo ""
          '';
        };
      }
    );
}
