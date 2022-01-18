var documenterSearchIndex = {"docs":
[{"location":"gettingstarted/developing/#Developing-a-new-ACE.jl-model","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"","category":"section"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"The ACE basis can be set up using the following function rpi_basis() containing the species, correlation order N, polynomial degree maxdeg, nearest neighbour distance r0 and inner/outer cutoff radii rin and rcut. Other parameters for defining the size of the basis (provided by length(B)) are wL and csp.","category":"page"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"B = rpi_basis(species = :Si,\n      N = 3,                        # correlation order = body-order - 1\n      maxdeg = 13,                  # polynomial degree\n      r0 = r0,                      # estimate for NN distance\n      D = SparsePSHDegree(; wL=1.3, csp=1.0),\n      rin = 0.65*r0, rcut = 5.5,    # domain for radial basis (cf documentation)\n      pin = 0)","category":"page"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"This basis can then be used in combination with IPFitting.jl to create a least squares system dB used for fitting.","category":"page"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"al = IPFitting.Data.read_xyz(\"./Si.xyz\", energy_key=\"dft_energy\", force_key=\"dft_force\", virial_key=\"dft_virial\")\ndB = LsqDB(\"\", B, al)","category":"page"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"We can then fit the potential using lsqfit() given a set of weights and reference one body potential Vref.","category":"page"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"weights = Dict(\"default\" => Dict(\"E\" => 15.0, \"F\" => 1.0 , \"V\" => 1.0 ))\nVref = OneBody(Dict(\"Si\" => -158.54496821))\nIP, lsqinfo = lsqfit(dB; weights = weights, Vref = Vref, asmerrs = true, solver=(:lap, 1.2));","category":"page"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"Returning a fitted interatomic potential IP and an lsqinfo dictionary containing information of the fit, such as the errors which can be displayed in table as follows.","category":"page"},{"location":"gettingstarted/developing/","page":"Developing a new ACE.jl model","title":"Developing a new ACE.jl model","text":"rmse_table(lsqinfo[\"errors\"])","category":"page"},{"location":"gettingstarted/pkg/#Using-the-Julia-Package-Manager","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"","category":"section"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"This is a very brief introduction to the Julia package manager, intended for newcomers to Julia who are here primarily to use the ACEsuit. But it is not really ACE specific at all. ","category":"page"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"The package manager provides functionality to organize reproducable Julia projects. A project is specified by a Project.toml where the user specifies which packages are required, and version bounds on those packages. The Package manager can then resolve these dependencies which results in a Manifest.toml where the full Julia environment is precisely specified. This can be used in a workflow as follows:","category":"page"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"To start a new project that uses ACE1.jl, e.g. to develop a new interatomic potential for TiAl we first create a new folder where the project will live, e.g., ace1_TiAl_project. Change to that folder and start the Julia REPL. Type ] to switch to the package manager, then activate a new project in the current directory via activate .\nYou now have an empty project. Start adding the packages you need, e.g., ","category":"page"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"add ACE1, JuLIP, IPFitting","category":"page"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"Type status to see your required packages listed. (Note this is only a subset of the installed packages!). Exit the REPL and type ls; you will then see a new file Project.toml which lists the project requirements, and a Manifest.toml which lists the actually packages and the version that have been installed.","category":"page"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"Specify version bounds: Open Project.toml in an editor and under the [compat] section you can now add version bounds, e.g. ACE1 = \"0.9, 0.10\". Please see the Pkg.jl docs for details on how to specify those bounds. Start a Julia REPL again, type ] to switch to the package manager and then up to up- or down-grade all installed packages to the latest version compatible with your bounds.","category":"page"},{"location":"gettingstarted/pkg/#Notes","page":"Using the Julia Package Manager","title":"Notes","text":"","category":"section"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"The Project.toml should always be committed to your project git repo. Whether Manifest.toml is also committed is a matter of taste or context. Tracking the Manifest will (normally) ensure future compatibility since it allows you to reconstruct the precise Julia environemt that was used when the Manifest was created.\nIf you are a user rather than developer it should almost never be required for you to check out a package (or, dev it in the package manager). When we (the developers) make changes to - say - ACE1.jl we almost always immediately tag another version and then you can adjust your version bounds in your project to update as well as enforce which version to use.","category":"page"},{"location":"gettingstarted/pkg/#Links","page":"Using the Julia Package Manager","title":"Links","text":"","category":"section"},{"location":"gettingstarted/pkg/","page":"Using the Julia Package Manager","title":"Using the Julia Package Manager","text":"https://pkgdocs.julialang.org/v1/\nhttps://pkgdocs.julialang.org/v1/compatibility/","category":"page"},{"location":"tutorials/#ACE.jl-Tutorials","page":"-","title":"ACE.jl Tutorials","text":"","category":"section"},{"location":"tutorials/","page":"-","title":"-","text":"create list of tutorials for more interesting problems","category":"page"},{"location":"ipfitting/#IPFitting.jl","page":"IPFitting.jl","title":"IPFitting.jl","text":"","category":"section"},{"location":"gettingstarted/installation/#Installation-Instructions","page":"Installation Instructions","title":"Installation Instructions","text":"","category":"section"},{"location":"gettingstarted/installation/#Short-Version","page":"Installation Instructions","title":"Short Version","text":"","category":"section"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"From the Julia REPL: ","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"using Pkg; pkg\"registry add https://github.com/JuliaMolSim/MolSim.git\"; pkg\"add JuLIP ACE PyCall ASE IPFitting\"","category":"page"},{"location":"gettingstarted/installation/#Detailed-Instructions","page":"Installation Instructions","title":"Detailed Instructions","text":"","category":"section"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"If you have any difficulties with the following setup process, please file an issue. We highly recommend familiarizing oneself with the Julia package manager and how Project management is best done in Julia. In particular all project should manage their own Project.toml file with appropriate version bounds, and where appropriate the Manifest.toml file can be tracked in order to guarantee reproducability of results. ","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"Install Julia. We recommend v1.6 or upwards. \nInstall the MolSim registry: start the Julia REPL, switch to package manager by typing ] and then run","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"registry add https://github.com/JuliaMolSim/MolSim.git","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"Create a folder for your new project that will use ACE1.jl. Change to that folder, start the Julia REPL and activate a new project, by switching to the package manager ], and then ","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"activate .","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"Now you can install the relevant packages that you need, e.g., ","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"add JuLIP ACE1","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"Next you should probably edit Project.toml and insert a version bound for ACE1 - see the Julia package manager documentation for more information.","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"To use ase from Julia, you can use PyCall or the ASE.jl interface. To install these, run","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"add PyCall ASE","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"from the package manager to add those to your project.","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"For fitting, you may wish to use IPFitting.jl,","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"add IPFitting","category":"page"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"This has ASE.jl as a dependency.","category":"page"},{"location":"gettingstarted/installation/#Trouble-shooting","page":"Installation Instructions","title":"Trouble-shooting","text":"","category":"section"},{"location":"gettingstarted/installation/","page":"Installation Instructions","title":"Installation Instructions","text":"On some systems ASE.jl is unable to automatically install python dependencies. We found that installing Anaconda and then pointing PyCall.jl to the Anaconda installation (cf PyCall Readme) resolves this. After installing Anaconda, it should then be sufficient to build ASE.jl again.\nIf you cannot use Anaconda python, or if the last point failed, then you can try to install the python dependencies manually before trying to build ASE.jl again. Specifically, it should be sufficient to just install the ase package. Please follow the installation instructions on their website.","category":"page"},{"location":"gettingstarted/aceintro/#Introduction-to-ACE-Models","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"","category":"section"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"The purpose of this section is to give a brief summary of the mathematics behind linear ACE parameterisations of invariant atomic properties. ","category":"page"},{"location":"gettingstarted/aceintro/#Invariant-Properties","page":"Introduction to ACE Models","title":"Invariant Properties","text":"","category":"section"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"To explain the main ideas in the simplest non-trivial setting, we consider systems of indistinguishable particles. A configuration is an mset R =  bm r_j _j subset mathbbR^3 with arbitary numbers of particles and we wish to develop representation of properties ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"   varphibig(R) in mathbbR","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"which are invariant under permutations (already implicit in the fact that R is an mset) and under isometries O(3). To make this explicit we can write this as","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"varphibig(  Q bm r_sigma j _j big)\n=\nvarphibig(  bm r_j _j big) qquad forall Q in O(3) \nquad sigma text a permutation","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"To that end we proceed in three steps: ","category":"page"},{"location":"gettingstarted/aceintro/#Density-Projection-/-Atomic-Base","page":"Introduction to ACE Models","title":"Density Projection / Atomic Base","text":"","category":"section"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"We define the \"atomic density\"","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"rho(bm r) = sum_j delta(bm r - bm r_j)","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"Then we choose a one-particle basis ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"phi_v(bm r) = phi_nlm(bm r) = R_n(r) Y_l^m(hatbm r)","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"and project rho` onto that basis, ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"A_v = A_nlm = langle phi_nlm rho rangle = \n   sum_j phi_nlm(bm r_j)","category":"page"},{"location":"gettingstarted/aceintro/#Density-correlations","page":"Introduction to ACE Models","title":"Density correlations","text":"","category":"section"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"Next, we form the N-correlations of the density, rho^otimes N and project them onto the tensor project basis, ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"   bm A_bm nlm \n   = Biglangle otimes_t = 1^N phi_n_t l_t m_t rho^otimes N Bigrangle \n   = prod_t = 1^N A_n_t l_t m_t","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"The reason to introduce these is that in the next step, the symmetrisation step the density project would loose all angular information while the N-correlations retain most (though not all) of it. ","category":"page"},{"location":"gettingstarted/aceintro/#Symmetrisation","page":"Introduction to ACE Models","title":"Symmetrisation","text":"","category":"section"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"Finally, we symmetrize the N-correlations, by integrating over the O(3)-Haar measure, ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"  B_bm nlm propto \n  int_O(3) bm A_bm nlm circ Q  dQ ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"Because of properties of the spherical harmonics one can write this as ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"  bm B = mathcalU bm A","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"where bm A is the vector of 1, 2, ..., N correlations (the maximal N is an approximation parameter!) and mathcalU is a sparse matrix (the coupling coefficients).","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"If one symmetrised all possible N-correlations then this would create a spanning set, but one can easily reduce this to an actual basis. This construction then yields a basis of the space of symmetric polynomials. ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"Notes: ","category":"page"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"Because of permutation symmetry only ordered bm v tuples are retained","category":"page"},{"location":"gettingstarted/aceintro/#Linear-Dependence","page":"Introduction to ACE Models","title":"Linear Dependence","text":"","category":"section"},{"location":"gettingstarted/aceintro/","page":"Introduction to ACE Models","title":"Introduction to ACE Models","text":"The construction described above introduces a lot of linear dependence which is removed in the ACE basis construction in a mixed symbolic / numerical procedure. In the end we no longer index the symmetrized basis functions as B_bm nlm but as B_bm nli with i indexing the linearly independent basis functions from the bm nl block. ","category":"page"},{"location":"gettingstarted/using/#Using-an-existing-ACE.jl-model","page":"Using an existing ACE.jl model","title":"Using an existing ACE.jl model","text":"","category":"section"},{"location":"gettingstarted/using/","page":"Using an existing ACE.jl model","title":"Using an existing ACE.jl model","text":"should provide examples of usage from ","category":"page"},{"location":"gettingstarted/using/","page":"Using an existing ACE.jl model","title":"Using an existing ACE.jl model","text":"Julia\nPython\nLammps\nOpenMM","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ACE1docs","category":"page"},{"location":"#ACEsuit-User-Documentation","page":"Home","title":"ACEsuit User Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}