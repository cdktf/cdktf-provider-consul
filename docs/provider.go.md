# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-consul.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulProvider <a name="ConsulProvider" id="@cdktf/provider-consul.provider.ConsulProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul consul}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/provider"

provider.NewConsulProvider(scope Construct, id *string, config ConsulProviderConfig) ConsulProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig">ConsulProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderConfig">ConsulProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPath">ResetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPem">ResetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertFile">ResetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertPem">ResetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth">ResetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps">ResetInsecureHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile">ResetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem">ResetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.provider.ConsulProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.provider.ConsulProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-consul.provider.ConsulProvider.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-consul.provider.ConsulProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaFile"></a>

```go
func ResetCaFile()
```

##### `ResetCaPath` <a name="ResetCaPath" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPath"></a>

```go
func ResetCaPath()
```

##### `ResetCaPem` <a name="ResetCaPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPem"></a>

```go
func ResetCaPem()
```

##### `ResetCertFile` <a name="ResetCertFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertFile"></a>

```go
func ResetCertFile()
```

##### `ResetCertPem` <a name="ResetCertPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertPem"></a>

```go
func ResetCertPem()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-consul.provider.ConsulProvider.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetHttpAuth` <a name="ResetHttpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth"></a>

```go
func ResetHttpAuth()
```

##### `ResetInsecureHttps` <a name="ResetInsecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps"></a>

```go
func ResetInsecureHttps()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile"></a>

```go
func ResetKeyFile()
```

##### `ResetKeyPem` <a name="ResetKeyPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem"></a>

```go
func ResetKeyPem()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.provider.ConsulProvider.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-consul.provider.ConsulProvider.resetScheme"></a>

```go
func ResetScheme()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.provider.ConsulProvider.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/provider"

provider.ConsulProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/provider"

provider.ConsulProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/provider"

provider.ConsulProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput">CaFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput">CaPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput">CaPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput">CertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput">CertPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput">HttpAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput">InsecureHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput">KeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput">KeyPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFile">CaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPath">CaPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPem">CaPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFile">CertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPem">CertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.header">Header</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth">HttpAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps">InsecureHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFile">KeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPem">KeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.provider.ConsulProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.provider.ConsulProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-consul.provider.ConsulProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput"></a>

```go
func CaFileInput() *string
```

- *Type:* *string

---

##### `CaPathInput`<sup>Optional</sup> <a name="CaPathInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput"></a>

```go
func CaPathInput() *string
```

- *Type:* *string

---

##### `CaPemInput`<sup>Optional</sup> <a name="CaPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput"></a>

```go
func CaPemInput() *string
```

- *Type:* *string

---

##### `CertFileInput`<sup>Optional</sup> <a name="CertFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput"></a>

```go
func CertFileInput() *string
```

- *Type:* *string

---

##### `CertPemInput`<sup>Optional</sup> <a name="CertPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput"></a>

```go
func CertPemInput() *string
```

- *Type:* *string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `HttpAuthInput`<sup>Optional</sup> <a name="HttpAuthInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput"></a>

```go
func HttpAuthInput() *string
```

- *Type:* *string

---

##### `InsecureHttpsInput`<sup>Optional</sup> <a name="InsecureHttpsInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput"></a>

```go
func InsecureHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput"></a>

```go
func KeyFileInput() *string
```

- *Type:* *string

---

##### `KeyPemInput`<sup>Optional</sup> <a name="KeyPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput"></a>

```go
func KeyPemInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-consul.provider.ConsulProvider.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFile"></a>

```go
func CaFile() *string
```

- *Type:* *string

---

##### `CaPath`<sup>Optional</sup> <a name="CaPath" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPath"></a>

```go
func CaPath() *string
```

- *Type:* *string

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPem"></a>

```go
func CaPem() *string
```

- *Type:* *string

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFile"></a>

```go
func CertFile() *string
```

- *Type:* *string

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPem"></a>

```go
func CertPem() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-consul.provider.ConsulProvider.property.header"></a>

```go
func Header() interface{}
```

- *Type:* interface{}

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth"></a>

```go
func HttpAuth() *string
```

- *Type:* *string

---

##### `InsecureHttps`<sup>Optional</sup> <a name="InsecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps"></a>

```go
func InsecureHttps() interface{}
```

- *Type:* interface{}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFile"></a>

```go
func KeyFile() *string
```

- *Type:* *string

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPem"></a>

```go
func KeyPem() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-consul.provider.ConsulProvider.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.provider.ConsulProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulProviderConfig <a name="ConsulProviderConfig" id="@cdktf/provider-consul.provider.ConsulProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/provider"

&provider.ConsulProviderConfig {
	Address: *string,
	Alias: *string,
	CaFile: *string,
	CaPath: *string,
	CaPem: *string,
	CertFile: *string,
	CertPem: *string,
	Datacenter: *string,
	Header: interface{},
	HttpAuth: *string,
	InsecureHttps: interface{},
	KeyFile: *string,
	KeyPem: *string,
	Namespace: *string,
	Scheme: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#address ConsulProvider#address}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile">CaFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_file ConsulProvider#ca_file}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath">CaPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_path ConsulProvider#ca_path}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem">CaPem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_pem ConsulProvider#ca_pem}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile">CertFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#cert_file ConsulProvider#cert_file}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem">CertPem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#cert_pem ConsulProvider#cert_pem}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#datacenter ConsulProvider#datacenter}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth">HttpAuth</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#http_auth ConsulProvider#http_auth}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps">InsecureHttps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#insecure_https ConsulProvider#insecure_https}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile">KeyFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#key_file ConsulProvider#key_file}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem">KeyPem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#key_pem ConsulProvider#key_pem}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#namespace ConsulProvider#namespace}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#scheme ConsulProvider#scheme}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#token ConsulProvider#token}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#address ConsulProvider#address}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#alias ConsulProvider#alias}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile"></a>

```go
CaFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_file ConsulProvider#ca_file}.

---

##### `CaPath`<sup>Optional</sup> <a name="CaPath" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath"></a>

```go
CaPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_path ConsulProvider#ca_path}.

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem"></a>

```go
CaPem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_pem ConsulProvider#ca_pem}.

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile"></a>

```go
CertFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#cert_file ConsulProvider#cert_file}.

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem"></a>

```go
CertPem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#cert_pem ConsulProvider#cert_pem}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#datacenter ConsulProvider#datacenter}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#header ConsulProvider#header}

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth"></a>

```go
HttpAuth *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#http_auth ConsulProvider#http_auth}.

---

##### `InsecureHttps`<sup>Optional</sup> <a name="InsecureHttps" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps"></a>

```go
InsecureHttps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#insecure_https ConsulProvider#insecure_https}.

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile"></a>

```go
KeyFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#key_file ConsulProvider#key_file}.

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem"></a>

```go
KeyPem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#key_pem ConsulProvider#key_pem}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#namespace ConsulProvider#namespace}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#scheme ConsulProvider#scheme}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#token ConsulProvider#token}.

---

### ConsulProviderHeader <a name="ConsulProviderHeader" id="@cdktf/provider-consul.provider.ConsulProviderHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/provider"

&provider.ConsulProviderHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.name">Name</a></code> | <code>*string</code> | The header name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.value">Value</a></code> | <code>*string</code> | The header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#name ConsulProvider#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#value ConsulProvider#value}

---


